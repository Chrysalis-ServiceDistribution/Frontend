import { IconButton } from '@radix-ui/themes';
import './noOutlineIconButton.css';

export default function NoOutlineIconButton(props: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <IconButton
      onClick={props.onClick}
      size="1"
      variant="outline"
      className="no-outline-icon-button"
    >
      {props.children}
    </IconButton>
  );
}
