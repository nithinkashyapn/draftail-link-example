import React, { Component } from "react";
import "./App.css";

import {
	DraftailEditor,
	BLOCK_TYPE,
	INLINE_STYLE,
	ENTITY_TYPE
} from "draftail";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import Link from "./helper/Link";
import LinkSource from "./helper/LinkSource";

const initial = JSON.parse(sessionStorage.getItem("draftail:content"));

const onSave = content => {
	console.log("saving", content);
	sessionStorage.setItem("draftail:content", JSON.stringify(content));
};

class App extends Component {
	render() {
		return (
			<div className="App">
				<h2 className="heading">Draftail Example</h2>
				<DraftailEditor
					rawContentState={initial || null}
					onSave={onSave}
					blockTypes={[
						{ type: BLOCK_TYPE.HEADER_THREE },
						{ type: BLOCK_TYPE.UNORDERED_LIST_ITEM }
					]}
					inlineStyles={[
						{ type: INLINE_STYLE.BOLD },
						{ type: INLINE_STYLE.ITALIC }
					]}
					entityTypes={[
						{
							type: ENTITY_TYPE.LINK,
							source: LinkSource,
							decorator: Link
						}
					]}
				/>
			</div>
		);
	}
}

export default App;
