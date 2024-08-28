export default function getBadgeProps(props) {
  const { title, icon, isActive, value, selected, rewardDetails } = props;
  return {
    title,
    icon,
    isActive,
    value,
    selected,
    rewardDetails,
  };
}
