import css from './StatusBar.module.css';
import { useEffect, useState } from 'react';
import thousandSeparator from '../../helpers/separator';
import fetchJarBalance  from '../../helpers/fetchJarBalance';
import DonationBtn from '../DonationBtn/DonationBtn';
import Progress from '../Progress/Progress';

const StatusBar = ({ goalRef }) => {
	const [balance, setBalance] = useState(0);
	// Оновлення прогресу кожну хвилину.
	useEffect(() => {
		fetchJarBalance(setBalance);
	}, []);

	return (
		<section className={css.section_status_bar}>
			{/* маркер зупинки для scrollToGoal */}
			<span className={'scroll_mark'} ref={goalRef}></span>
			<h2 className={css.title}>
				Зроби свій внесок, приєднуйся до <span className={css.title_mobile}>командного</span> збору
			</h2>
			<div className={css.description}>
				<div className={css.amount}>
					<h3 className={css.description_title}>Вже зібрано</h3>
					<p className={css.description_text}>{thousandSeparator(balance)} грн</p>
				</div>
				<div className={css.goal}>
					<h3 className={css.description_title}>Наша мета</h3>
					<p className={css.description_text}>50 000 грн</p>
				</div>
			</div>

			<Progress balance={balance} />
			<DonationBtn />
		</section>
	);
};

export default StatusBar;