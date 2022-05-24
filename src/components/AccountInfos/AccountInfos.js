import "./AccountInfos.css"

const AccountInfos = (props) => {
  return (
    <article className="accountInfos">
      <p>{props.accountName}</p>
      <span>${props.accountBalance}</span>
      <p>{props.balanceType}</p>
      <button>View transactions</button>
    </article>
  )
}

export default AccountInfos
