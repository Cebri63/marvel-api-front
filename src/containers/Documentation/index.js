import React from "react";
import ReactMarkdown from "react-markdown";
import "./index.css";
import gfm from "remark-gfm";
import illustration from "../../assets/images/illustration-miror.jpg";

const Documentation = () => {
  const comics = `
## Comics
    
### Route : /comics 
### Method : GET
    
Get a list of comics
    
| Query    | Info                        | Required |
| -------- | --------------------------- | -------- |
|  apiKey  | API key received            | Yes      |
|  limit   | between 1 and 100           | No       |
|  skip    | number of results to ignore | No       |
|  title   | search a comic by title     | No       |

### Ex : https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=YOUR_API_KEY
    

    
### Route : /comics/:characterId
### Method : GET
    
Get a list of comics containing a specific character

Params
    
| Params        | Info                  | Required |
| ------------- | --------------------- | -------- |
|  characterId  | characters mongoDB id | Yes      |

Query
    
| Query    | Info             | Required |
| -------- | ---------------- | -------- |
|  apiKey  | API key received | Yes      |

### Ex : https://lereacteur-marvel-api.herokuapp.com/comics/5fc8ba1fdc33470f788f88b3?apiKey=YOUR_API_KEY


## Characters
    
### Route : /characters
### Method : GET
    
Get a list of characters
    
| Query    | Info                        | Required |
| -------- | --------------------------- | -------- |
|  apiKey  | API key received            | Yes      |
|  limit   | between 1 and 100           | No       |
|  skip    | number of results to ignore | No       |
|  name    | search a character by name  | No       |


### Ex : https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=YOUR_API_KEY

    `;

  return (
    <div className="documentation-container">
      <div>
        <ReactMarkdown plugins={[gfm]} source={comics} />
      </div>
      <img src={illustration} alt="marvel" />
    </div>
  );
};

export default Documentation;
