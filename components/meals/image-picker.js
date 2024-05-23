'use client';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export const ImagePicker = ({ label, name }) => {
	const [pickImage, setPickImage] = useState();
	const input = useRef();

	const handlePickClick = () => {
		input.current.click();
	};

	const handleImgChange = e => {
		const file = e.target.files[0];

		if (!file) {
			setPickImage(null);
			return;
		}

		const fileReader = new FileReader();

		fileReader.onload = () => {
      setPickImage(fileReader.result)
    };

		fileReader.readAsDataURL(file);
	};

	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>No images picked yet</p>}
          {pickImage && <Image src={pickImage} fill alt="userImage"/>}
        </div>
				<input
					className={classes.input}
					type="file"
					id={name}
					accept="image/png, image/jpeg"
					name={name}
					ref={input}
					onChange={handleImgChange}
          required
					// multiple - prop щоб завантажити декілька файлів
				/>
				<button onClick={handlePickClick} className={classes.button} type="button">
					Pick an Image
				</button>
			</div>
		</div>
	);
};
