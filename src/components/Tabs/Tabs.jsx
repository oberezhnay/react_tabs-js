export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={(tab.id === activeTabId  || (!activeTabId&&tab.id === ('tab-1'))) ? 'is-active' : ''}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => {
              if (tab.id !== activeTabId){
              onTabSelected(tab.id);
              }
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
