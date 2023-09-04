function ProfileCard({ title, handle, image }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>

      <div>Title is {title} </div>
      <div>Handle is {handle} </div>
    </div>
  );
}

export default ProfileCard;
