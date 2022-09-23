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
export interface PageInfo extends SanityBody{
  _type:'pageInfo';
  address:string;
  backgroundInformation: string;
  email:string;
  heroImage:Image;
  name:string;
  phoneNumber:string;
  profilePic:Image;
  role:string;
}

export interface Technology extends SanityBody{
  _type:"skill";
  image:Image;
  progress:number;
  title:string;


}
export interface Skill extends SanityBody{
  _type:"skill";
  image:Image;
  progress:number;
  title:string;


}
export interface WExperience extends SanityBody{
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
export interface Projects extends SanityBody{
  title:string;
  _type:"project";
  image:Image;
  linkToBuild: string;
  summary:string;
  technologies:Technology[];


}


export interface Social extends SanityBody{
  _type:"social";
  title:string;
  url:string;

}