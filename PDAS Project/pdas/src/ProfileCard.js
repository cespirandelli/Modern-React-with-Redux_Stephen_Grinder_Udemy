function ProfileCard(props) {
  //   const title = props.title;
  //   const handle = props.handle;

  // The line below, does the same as both commented above. This is a JS destructuring feature
  const { title, handle } = props;
  // You create two variables that receives props.{object_value}

  return (
    <div>
      <div>Title is {title} </div>
      <div>Handle is {handle} </div>
    </div>
  );
}

export default ProfileCard;
