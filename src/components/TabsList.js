const TabsList = (props) => {
  const { tab, currentTab, setCurrentTab } = props
  // console.log({ tab })
  // console.log({ currentTab })
  const className =
    tab.tabId === currentTab ? "tab-name current-tab" : "tab-name"
  return (
    <>
      <p className={className} onClick={() => setCurrentTab(tab.tabId)}>
        {tab.displayText}
      </p>
    </>
  )
}

export default TabsList
