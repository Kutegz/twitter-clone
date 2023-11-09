import '../styles/SidebarOption.css';

type SidebarOptionProps = {
  Icon: React.ComponentType;
  text: string;
  active?: boolean;
};

const SidebarOption = ({ Icon, text, active = false }: SidebarOptionProps) => {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
