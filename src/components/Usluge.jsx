import data from "../data/data";
import Usluga from "./Usluga";

const Usluge = ({ usluge }) => {
	return (
		<section id="usluge" className="mb-12" ref={usluge}>
			<div className="p-8">
				<h2 className="text-5xl font-oswald mb-10">Usluge</h2>
				<div className="custom_grid2 auto-rows-[17rem]">
					{data.map((usluga) => {
						return <Usluga usluga={usluga} key={usluga.id} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Usluge;

/*Edukacije: Stecco fascial manipulation lvl 3
ISST Schroth therapist
Basic pro coach 
Student Osteopatije
Student neuro biomechanics
Student functional medicine

Nudim usluge: Dijagnostika problema,rehabilitacije, korekcija posturalnih deformacija ,elektro stimulacija,terapija ultrazvukom,terapijske vjezbe u vodi,održavanje i prevenciju zdravlja,edukaciju te konzultacije oko zdravlja
Masaža, grupni treninzi , individualni treninzi , anticelulitne tretmane ,limfne drenaže,brazilske limfne drenaže, face lifting drenaže.*/
