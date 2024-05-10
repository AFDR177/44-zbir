import styles from './DonationBtn.module.css';
import { DONATION_URL } from '../../constants/url_monobanc';

const DonationBtn = () => {
	return (
		<a href={DONATION_URL} target="_blank" rel="noopener noreferrer">
			<button className={styles.donationBtn}>Допомогти</button>
		</a>
	);
};

export default DonationBtn;
