import React from 'react';
import styles from './SliderButtons.module.scss';

interface SliderButtonsProps {
	swipe: React.Dispatch<React.SetStateAction<string>>
	corouselPosition: string
	sliderItemWidth: string
	countItems: number
};

const SliderButtons = (props: SliderButtonsProps) => {

	function swipePrev() {
		if (parseInt(props.corouselPosition) === 0) return;

		const newPosition: number = parseInt(props.corouselPosition) + parseInt(props.sliderItemWidth);
		props.swipe(`${newPosition}px`)
	}

	function swipeNext() {
		if (parseInt(props.corouselPosition) === parseInt(props.sliderItemWidth) * (1 - props.countItems)) return;

		const newPosition: number = parseInt(props.corouselPosition) - parseInt(props.sliderItemWidth);
		props.swipe(`${newPosition}px`)
	}

	return (
		<div className={styles['slider-buttons']}>
			<button className={styles['slider-bth']}
				onClick={() => { swipePrev() }}
				type='button'
			>prev</button>
			<button className={styles['slider-bth']}
				onClick={() => { swipeNext() }}
				type='button'
			>next</button>
		</div>
	)
};

export default SliderButtons;