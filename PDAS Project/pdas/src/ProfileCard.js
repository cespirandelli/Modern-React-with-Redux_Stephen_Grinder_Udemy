function ProfileCard({ title, handle }) {
  //   const { title, handle } = props;
  // You can shorten the attribution of properties even more using the arguments of the component function.

  return (
    <div>
      <div>Title is {title} </div>
      <div>Handle is {handle} </div>
    </div>
  );
}

export default ProfileCard;
