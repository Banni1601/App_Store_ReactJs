import "./tabs.css";

const Tabs = (props) => {
  const { data, updateTabId, activeTab } = props;
  const { tabId, displayText } = data;
  const changeStyle = () => {
    updateTabId(tabId);
  };
  const isTab = activeTab === tabId ? "stylee" : "";
  return (
    <button onClick={changeStyle} className={isTab} type="button">
      {data.displayText}
    </button>
  );
};

export default Tabs;
