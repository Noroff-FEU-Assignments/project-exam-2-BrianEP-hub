import { CheckoutForm, PaymentForm } from '../Forms';
import Confirmation from './Confirmation';

export const renderRelatedComponent = ({
	checkoutStep,
	handleNextStep,
	handlePrevStep,
}) => {
	switch (checkoutStep) {
		case 'details':
			return (
				<CheckoutForm
					handleNextStep={handleNextStep}
					handlePrevStep={handlePrevStep}
				/>
			);
		case 'payment':
			return (
				<PaymentForm
					handleNextStep={handleNextStep}
					handlePrevStep={handlePrevStep}
				/>
			);
		case 'confirmation':
			return <Confirmation />;
		default:
			return null;
	}
};
