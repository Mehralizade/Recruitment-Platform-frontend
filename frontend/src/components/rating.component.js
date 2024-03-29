import React, {useState} from 'react'

 import { Rating } from 'react-simple-star-rating'
 import { AuthContext } from "../App";
 export default function RatingComp(props) {
  const { state: authState } = React.useContext(AuthContext);
   const [rating, setRating] = useState(0)
   const [rating2, setRating2] = useState(0)
   const [rating3, setRating3] = useState(0)

  const [value, setValue] = useState(false)
   // Catch Rating value
   const handleRating = (rate) => {
     setRating(rate)

   }
   const handleRating2 = (rate) => {
     setRating2(rate)

   }
   const handleRating3 = (rate) => {
     setRating3(rate)

   }

   const overall_rating = Math.floor((rating+rating2+rating3)/3)
   function SubmitHandler(event){
       event.preventDefault();


       const RatingData = {
           criteria1: (rating),
           criteria2: (rating2),
           criteria3: (rating3),
           overall_rating:(overall_rating),
           rated: props.id,
           rater: authState.userId,
           
       }

       fetch('http://127.0.0.1:8000/api/ratings/',
     {
       method: 'POST',
       body: JSON.stringify(RatingData),
       headers: {
         'Content-Type':'application/json',
       } 
     })
       console.log(RatingData)

   }

   return (
     <div>
          <form onSubmit = {SubmitHandler}>
            <div className = 'rating-wrapper'>
              <p>Punctuality: </p><Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
              <p>Compliance:</p> <Rating onClick={handleRating2} ratingValue={rating2} /* Rating Props */ />
              <p>Experiment Completion: </p> <Rating onClick={handleRating3}  ratingValue={rating3} /* Rating Props */ />
              <button className='btn btn-success' onClick = {() => setValue(true)}> {value ? "Rated" : "Rate"}</button>
            </div>
          </form>
     </div>
   )
 }
