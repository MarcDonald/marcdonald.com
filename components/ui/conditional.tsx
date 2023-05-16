import React from 'react';

type ConditionalProps = {
	condition: boolean;
	children: JSX.Element;
};

type ConditionalWrapProps = {
	wrap: (children: JSX.Element) => JSX.Element;
} & ConditionalProps;

export const ConditionalWrap = ({
	condition,
	children,
	wrap,
}: ConditionalWrapProps) =>
	condition ? React.cloneElement(wrap(children)) : children;

export const Conditional = ({ condition, children }: ConditionalProps) =>
	condition ? children : <></>;
