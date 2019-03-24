// @flow
import React from "react";
import { Node } from "react";
import ReactModal from "react-modal";
import "./Modal.css";

type Props = {|
	onAfterOpen: () => void | Promise<void>,
	onRequestClose: (SyntheticEvent<>) => void,
	isOpen: boolean,
	contentLabel: string,
	children: Node
|};

const Modal = (props: Props) => (
	<ReactModal
		className="Modal"
		overlayClassName="Overlay"
		parentSelector={() => document.body}
		{...props}
	/>
);

export default Modal;
