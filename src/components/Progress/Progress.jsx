import css from './Progress.module.css';

const Progress = ({ balance }) => {
	const width = balance ? `${(balance / 500).toFixed(1)}%` : '0%';
	return (
		<div className={css.progress}>
			<div className={css.progress_item} style={{ width: width }}></div>
		</div>
	);
};

export default Progress;