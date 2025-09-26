import { useNavigation } from "react-router-dom";
import { cn } from "../utils/clsx";

const LoadingSpinner = () => {
	const navigation = useNavigation();

	const loading = navigation.state === "loading";

	return (
		<div className={cn("preloader", loading ? "" : "preloader-hide")}>
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
