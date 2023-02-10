import React, { useState } from 'react';
import styles from './Slider.module.scss';
import SliderButtons from './SliderButtons/SliderButtons';
import SliderItem from './SliderItem/SliderItem';

interface SliderProps {
    imgLinks: Array<string>
    sliderItemStyles: {
        width: string
    }
};

const Slider = (props: SliderProps) => {
    const [corouselPosition, setCorouselPosition] = useState('0px');

    return (
        <div
            className={styles['slider']}
            style={{ ...props.sliderItemStyles }}
        >
            <div
                className={styles['slider__carousel']}
                style={{ left: corouselPosition }}
            >
                {props.imgLinks.map((l) => {
                    return (
                        <SliderItem
                            sliderItemStyles={props.sliderItemStyles}
                            imgLink={l}
                            key={l}
                        />
                    )
                })}
            </div>
            <SliderButtons
                swipe={setCorouselPosition}
                corouselPosition={corouselPosition}
                sliderItemWidth={props.sliderItemStyles.width}
                countItems={props.imgLinks.length}
            />
        </div>
    )
};

export default Slider;