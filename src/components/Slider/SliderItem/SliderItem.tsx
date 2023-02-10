import React from 'react';
import styles from './SliderItem.module.scss';

interface SliderItemProps {
	imgLink: string
	sliderItemStyles: {
		width: string
	}
};

const SliderItem = (props: SliderItemProps) => {
	return (
		<div
			className={styles['slider-item']}
			style={{...props.sliderItemStyles}}
		>
			<img className={styles['slider-item__img']} src={props.imgLink} alt="img" />
		</div>
	)
};

export default SliderItem;