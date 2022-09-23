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

export interface Technology extends SamityBody{
  _type:"skill";
  image:Image;
  progress:number;
  title:string;


}
export interface Skill extends SamityBody{
  _type:"skill";
  image:Image;
  progress:number;
  title:string;


}
export interface Experience extends SamityBody{
  _type:"experience";
  company:string;
  companyImage:Image;
  dateEnded:string
  dateStarted: string;
  isCurrentlyWorkingHere:boolean;
  jobTitle:string;
  points:string[];
  technologies:Technology[];
  

}
export interface Project extends SamityBody{
  title:string;
  _type:"project";
  image:Image;
  linkToBuild: string;
  summary:string;
  technologies:Technology[];


}


export interface Social extends SamityBody{
  _type:"social";
  title:string;
  url:string;

}