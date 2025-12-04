import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
	user: z.string().min(5, "Ime i prezime mora imati barem 5 slova"),
	email: z.email("Neispravna email adresa"),
	location: z.string().min(2, "Ime i prezime mora imati barem 2 slova"),
	message: z.string().min(5, "Molim pošaljite ispravnu poruku"),
	botfield: z.string().optional(),
});

export const handler = async (event) => {
	try {
		const body = JSON.parse(event.body);

		const data = contactSchema.parse(body);

		if (data.botfield) {
			// bot detected
			return {
				statusCode: 400,
				body: JSON.stringify({ error: "Bot detektiran" }),
			};
		}

		const message = {
			// sets the name of the sender
			from: `Prehab <${process.env.EMAIL_FROM}>`,
			to: process.env.EMAIL_FROM,
			subject: "Novi upit sa Prehab stranice",
			html: `
    <p>
        <span style="font-weight: bold;">Ime: </span> ${data.user}
    </p>
    <p>
        <span style="font-weight: bold;">Email: </span> ${data.email}
    </p>
    <p>
        <span style="font-weight: bold;">Email: </span> ${data.location}
    </p>
    <p>
        <span style="font-weight: bold;">Poruka: </span>${data.message}
    </p>
    `,
			headers: {
				"X-Entity-Ref-ID": "newmail",
			},
		};

		const transporter = nodemailer.createTransport({
			host: "smtpout.secureserver.net",
			secure: true,
			port: 465,
			auth: {
				user: process.env.EMAIL_FROM,
				pass: process.env.PASS,
			},
		});

		await transporter.sendMail(message);
		return {
			statusCode: 200,
			body: JSON.stringify({ message: "Vaš zahtjev je uspješno poslan" }),
		};
	} catch (err) {
		if (err instanceof z.ZodError) {
			const typeError = z.flattenError(err).fieldErrors;

			return {
				statusCode: 400,
				body: JSON.stringify({ error: Object.values(typeError) }),
			};
		}
		if (err instanceof Error) {
			return {
				statusCode: 500,
				body: JSON.stringify({ error: err.message }),
			};
		}
	}
};
