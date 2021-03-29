const User = ({ user }) => {
  return (
    <div>
      <p>
        {user.name.firstname} {user.name.lastname}
      </p>

      <p>address:{' '}
        {user.address.street}{' '}{user.address.number},
        {user.address.zipcode}{' '}{user.address.city}</p>

      <p>phone: {user.phone}</p>
      <p>e-mail: {user.email}</p>
    </div>
  );
};

export default User;
