interface SanityBody{
  _createdAt:string;
  _id:string;
  _rev:string;
  _updatedAt:string;
}
interface Image{
_type:"image";
  asset:{
    _ref:string;
    _type:"reference";
  }
}
export interface pageInfo extends SamityBody{
  _type:pageInfo;
  address:string;
  backgroundInformation: string;
  email:string;
  heroImage:Image;
  name:string;
  phoneNumber:string;
  profilePic:Image;
  role:string;
}


}

export interface Social extends SamityBody{
  _type:"social";
  title:string;
  url:string;

}