export interface PageTitleProps extends React.PropsWithChildren {
  isDetailsView: boolean;
  onBackToSearch?: () => void;
}
