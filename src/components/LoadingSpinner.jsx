import { useNavigation } from "react-router-dom";
import { cn } from "../utils/clsx";
import { useLayoutEffect, useState } from "react";

const LoadingSpinner = () => {
	// const navigation = useNavigation();
	const [show, setShow] = useState(true);
	const navigation = useNavigation();

	useLayoutEffect(() => {
		let timer;

		const hide = () => {
			timer = setTimeout(() => setShow(false), 1000);
		};

		if (navigation.state === "idle") {
			if (document.readyState === "complete") {
				hide();
			} else {
				const handleLoad = () => hide();
				window.addEventListener("load", handleLoad, { once: true });
			}
		} else {
			setShow(true); // show immediately when navigating
		}

		return () => clearTimeout(timer);
	}, [navigation.state]);

	return (
		<div className={cn("preloader", !show ? "preloader-hide" : "")}>
			<div className="loader">
				<div className="ytp-spinner">
					<div className="ytp-spinner-container">
						<div className="ytp-spinner-rotator">
							<div className="ytp-spinner-left">
								<div className="ytp-spinner-circle"></div>
							</div>
							<div className="ytp-spinner-right">
								<div className="ytp-spinner-circle"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoadingSpinner;
