// JHU Materials Science Design System: component props (documentation; window.JHUDS.<Name>)
import * as React from "react";

export interface ButtonProps {
  /** 'primary' | 'secondary' | 'gold' | 'onDark' | 'ghost' */
  variant?: string;
  /** 'sm' | 'md' | 'lg' */
  size?: string;
  /** trailing arrow, for "Learn more →" CTAs */
  arrow?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export declare function Button(props: ButtonProps): React.ReactElement | null;

export interface IconButtonProps {
  /** icon node, e.g. <i className="fa-solid fa-magnifying-glass" /> */
  icon: React.ReactNode;
  /** accessible label (required) */
  label: string;
  /** 'primary' | 'subtle' */
  variant?: string;
  /** square side in px */
  size?: number;
  onClick?: () => void;
}

export declare function IconButton(props: IconButtonProps): React.ReactElement | null;

export interface InputProps {
  label?: string;
  hint?: string;
  /** error message; also styles the border */
  error?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
}

export declare function Input(props: InputProps): React.ReactElement | null;

export interface SelectProps {
  label?: string;
  /** strings or {value, label} */
  options: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (e: any) => void;
}

export declare function Select(props: SelectProps): React.ReactElement | null;

export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
}

export declare function Checkbox(props: CheckboxProps): React.ReactElement | null;

export interface RadioProps {
  label?: React.ReactNode;
  checked?: boolean;
  name?: string;
  value?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
}

export declare function Radio(props: RadioProps): React.ReactElement | null;

export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
}

export declare function Switch(props: SwitchProps): React.ReactElement | null;

export interface CardProps {
  /** 'none' | 'top' (Heritage bar) | 'gold' */
  accent?: string;
  /** image URL or node; 3:2 crop */
  image?: string | React.ReactNode;
  /** condensed all-caps label */
  eyebrow?: string;
  title?: React.ReactNode;
  /** body copy */
  children?: React.ReactNode;
  /** text link CTA, renders with trailing arrow */
  cta?: string;
  onCtaClick?: () => void;
}

export declare function Card(props: CardProps): React.ReactElement | null;

export interface BadgeProps {
  /** 'blue' | 'spirit' | 'gold' | 'green' | 'red' | 'neutral' */
  tone?: string;
  children: React.ReactNode;
}

export declare function Badge(props: BadgeProps): React.ReactElement | null;

export interface TagProps {
  children: React.ReactNode;
  /** renders an × affordance */
  onRemove?: () => void;
}

export declare function Tag(props: TagProps): React.ReactElement | null;

export interface StatBlockProps {
  /** the big number, Roboto Slab */
  value: React.ReactNode;
  label?: string;
  /** longer copy beside a vertical rule */
  description?: React.ReactNode;
  /** optional icon node */
  icon?: React.ReactNode;
  /** styles for Heritage Blue backgrounds */
  onDark?: boolean;
}

export declare function StatBlock(props: StatBlockProps): React.ReactElement | null;

export interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  /** intro paragraph under the gold rule */
  lede?: React.ReactNode;
  /** right-aligned action, e.g. a ghost Button */
  action?: React.ReactNode;
  onDark?: boolean;
}

export declare function SectionHeader(props: SectionHeaderProps): React.ReactElement | null;

export interface QuoteProps {
  /** quote text (no quote marks — added automatically) */
  children: React.ReactNode;
  name?: string;
  role?: string;
  /** square-cropped headshot URL */
  avatar?: string;
}

export declare function Quote(props: QuoteProps): React.ReactElement | null;

export interface TabsProps {
  tabs: string[];
  /** controlled active tab; omit for uncontrolled */
  active?: string;
  onChange?: (tab: string) => void;
}

export declare function Tabs(props: TabsProps): React.ReactElement | null;

export interface BreadcrumbProps {
  /** strings or {label, href}; last item is the current page */
  items: Array<string | { label: string; href?: string }>;
}

export declare function Breadcrumb(props: BreadcrumbProps): React.ReactElement | null;

export interface AlertProps {
  /** 'info' | 'success' | 'warning' | 'danger' */
  tone?: string;
  title?: string;
  children?: React.ReactNode;
  onDismiss?: () => void;
}

export declare function Alert(props: AlertProps): React.ReactElement | null;

export interface DialogProps {
  open: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** action row, e.g. Buttons */
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number;
}

export declare function Dialog(props: DialogProps): React.ReactElement | null;

export interface ToastProps {
  open?: boolean;
  /** 'info' | 'success' | 'danger' */
  tone?: string;
  children: React.ReactNode;
  onDismiss?: () => void;
}

export declare function Toast(props: ToastProps): React.ReactElement | null;

export interface TooltipProps {
  label: string;
  /** trigger element */
  children: React.ReactNode;
}

export declare function Tooltip(props: TooltipProps): React.ReactElement | null;
