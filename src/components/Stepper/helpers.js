import { CheckoutForm, PaymentForm } from '../Forms';
import Confirmation from './Confirmation';

export const renderRelatedComponent = ({
	checkoutStep,
	guest,
	handleNextStep,
	handlePrevStep,
}) => {
	switch (checkoutStep) {
		case 'details':
			return (
				<CheckoutForm
					guest={guest}
					handleNextStep={handleNextStep}
					handlePrevStep={handlePrevStep}
				/>
			);
		case 'payment':
			return (
				<PaymentForm
					guest={guest}
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
