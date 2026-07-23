import type { ReactNode } from "react";

type FullWidthPageLayoutProps = {
  children: ReactNode;
};

const FullWidthPageLayout = ({
  children,
}: FullWidthPageLayoutProps) => {
  return <div>{children}</div>;
};

export default FullWidthPageLayout;