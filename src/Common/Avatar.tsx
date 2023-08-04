const Avatar = ({ image }: { image: string }) => {
  return (
    <div className="avatar">
      <div className="w-20 rounded-full">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Avatar;
