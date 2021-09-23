
import axios from "axios"; //axios paketi eklendi

export default async function getData(number)
{
try{
    const {data: users} = await axios("https://jsonplaceholder.typicode.com/users/"+ number);// çağrılacak kullanıcı verisi çekiliyor
    const {data: posts} = await axios("https://jsonplaceholder.typicode.com/posts/"+ number);//çağrılacak post verisi çekiliyor

    return { ...users, posts }; //user ve post verisi geri döndürülüyor
}
    catch(error){
        return error;
    }
}
