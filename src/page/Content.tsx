import React, { useState, useReducer } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "src/component/Header";
import Home from "src/page/Home";
import PostMain from "src/page/PostMain";
import MyMain from "src/page/MyMain";
import MyBookmark from "src/page/MyBookmark";
import MyQuestion from "src/page/MyQuestion";
import MyAnswer from "src/page/MyAnswer";
import Footer from "src/component/Footer";
import Interview from "src/page/Interview";
import PostDetail from "src/page/PostDetail";

type State = {
	headerType: string;
	tabIdx: number;
};

export type HeaderAction =
	| { type: "CHANGE_TYPE"; headerType: string }
	| { type: "CHANGE_TAB"; tabIdx: number };

const initialUserState = {
	headerType: "main",
	tabIdx: 0,
};

const HeaderReducer = (state: State, action: HeaderAction) => {
	switch (action.type) {
		case "CHANGE_TYPE": {
			return {
				...state,
				headerType: action.headerType,
			};
		}
		case "CHANGE_TAB": {
			return {
				...state,
				tabIdx: action.tabIdx,
			};
		}
	}
};

function Content() {
	const [headerType, setHeaderType] = useState("main");
	const [tabIdx, setTabIdx] = useState(0);

	const [headerInfo, dispatchHeader] = useReducer(
		HeaderReducer,
		initialUserState
	);

	return (
		<>
			<BrowserRouter>
				<Header type={headerInfo.headerType} idx={headerInfo.tabIdx} />
				<Route
					exact
					path="/interview"
					render={(props) => (
						<Interview dispatchHeader={dispatchHeader} {...props} />
					)}
				/>
				<Route
					exact
					path="/post"
					render={(props) => (
						<PostMain dispatchHeader={dispatchHeader} {...props} />
					)}
				/>
				<Route
					exact
					path="/post/detail"
					render={(props) => (
						<PostDetail dispatchHeader={dispatchHeader} {...props} />
					)}
				/>
				<Route
					exact
					path="/my/bookmark"
					render={(props) => (
						<MyBookmark dispatchHeader={dispatchHeader} {...props} />
					)}
				/>
				<Route
					exact
					path="/my/question"
					render={(props) => (
						<MyQuestion dispatchHeader={dispatchHeader} {...props} />
					)}
				/>
				<Route
					exact
					path="/my/answer"
					render={(props) => (
						<MyAnswer dispatchHeader={dispatchHeader} {...props} />
					)}
				/>
				<Route
					exact
					path="/my"
					render={(props) => (
						<MyMain dispatchHeader={dispatchHeader} {...props} />
					)}
				/>
				<Route
					exact
					path="/"
					render={(props) => (
						<Home dispatchHeader={dispatchHeader} {...props} />
					)}
				/>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default Content;
