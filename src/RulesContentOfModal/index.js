import './index.css'

const RulesContentOfModal = props => {
  const {ruleSet1, ruleSet2} = props

  // const totalRules = [...ruleSet1, ...ruleSet2]

  const allRulesBgContainer = ruleSet2
    ? 'doubleRuleSetContainer'
    : 'singleRuleSetContainer'

  return (
    <div className="mainBgContainer">
      <ul className={allRulesBgContainer}>
        {ruleSet1.map(each => (
          <li key={each.id} className="eachRuleText">
            {each.rule}
          </li>
        ))}
      </ul>
      {ruleSet2 !== undefined && (
        <ul className={allRulesBgContainer}>
          {ruleSet2.map(each => (
            <li key={each.id} className="eachRuleText">
              {each.rule}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RulesContentOfModal
