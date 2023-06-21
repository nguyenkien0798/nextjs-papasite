import { ReactHTMLElement } from "react";

export interface Pageable<T> {
  data: T[];
  total: number;
}

export interface IOptions {
  readonly value: string
  readonly label: string
}

export interface Slide {
	key: number,
	content: ReactHTMLElement<HTMLElement>,
	image: string,
	onClick: () => void,
}

export interface CardProps {
  key: number
  content: React.ReactNode
}