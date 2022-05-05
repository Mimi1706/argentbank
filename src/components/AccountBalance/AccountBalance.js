import "./AccountBalance.css"

const AccountBalance = (props) => {
  return (
    <article className="accountBalance">
      <p>{props.bankName}</p>
      <span>${props.bankBalance}</span>
      <p>Available Balance</p>
      <button>View transactions</button>
    </article>
  )
}

export default AccountBalance
