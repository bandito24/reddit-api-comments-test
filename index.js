const comments = 
[{depth: 14, item: 'It’s a lot faster, but using libraries written in Fortran or C is faster still and much more common'},
{depth: 9, item: 'Have you used PyPy at all? It uses a JIT compiler …orking a whole lot faster.\n\nhttps://www.pypy.org/'},
{depth: 4, item: 'It’s very common to call into code in other langua…is bearable in any non trivial piece of software.'},
{depth: 9, item: "Haven't seen anyone address it yet, but this is ca… application, a web-based tool, or a mobile tool."},
{depth: 9, item: 'the last missing bit is the idea of a [process](ht…f like a bunch of cooks in a restaurant kitchen).'},
{depth: 4, item: 'Thank you, this is the best explanation I’ve received'},
{depth: 19, item: `For this Web example it's not really that your "mi…ding in stuff in PHP -&gt; *mixing the language*.`},
{depth: 24, item: 'True. But the project he was talking about had nothing to do with web development'},
{depth: 19, item: 'Good luck to John Carmack trying to get a webbrowser to interpret C++'},
{depth: 14, item: "I listened to an interview with John Carmack, and …s where it's preferable to use only one language?"},
{depth: 9, item: 'Basically yes, there is (probably) no single big c…n side so it is best to mix match their up sides.'},
{depth: 9, item: 'They used whatever the appropriate languages were …ls available that are better than previous tools.'},
{depth: 4, item: "But i'm confused, did Musk, Bill Gates, Zuckerberg…ll these different languages to build their apps?"}
]




let orderedComments = []
let thread = [];
let location;
let theShift;
let mergedObj;
let removedArrays;


for(let i = 0; i < comments.length; i++){
    //THESE FIRST TWO CONDITIONALS ARE FOR ESTABLISHING THE CURRENT THREAD
    if(i === 0){
        thread.push(comments[i])
    } 
    else if(comments[i]['depth'] < comments[(i - 1)]['depth']){
        thread.unshift(comments[i])
    }

    //HANDLES THE CODE FOR WHEN THE NEXT VALUE IS NOT A COMMENT THREAD
    else if(comments[i]['depth'] >= comments[(i - 1)]['depth']){
        if(thread.length > 0){
            theShift = thread.shift()
            if(thread.length > 0){
                orderedComments[orderedComments.length] = (thread)
            }

            if(orderedComments.length == 1 && theShift['depth'] < orderedComments[0][0]['depth']){
                location = -1
            } 
            else {
            location = orderedComments.findLastIndex(obj => theShift['depth'] >= obj[0]['depth']) 
            }
                
// if(i === 4){
//     console.log(location)
//     console.log(theShift)
// }

            if(location == -1){
                orderedComments.unshift([theShift])
                removedArrays = orderedComments.splice(0)
                orderedComments[0] = removedArrays.reduce((acc, cur) => acc.concat(cur), []);
            }
            else{
                if(location == (orderedComments.length - 1)){
                    orderedComments[(orderedComments.length)] = ([theShift])
                }
                 else {    
                orderedComments[location + 1].unshift(theShift)
                removedArrays = orderedComments.splice(location + 1)
                orderedComments[location + 1] = removedArrays.reduce((acc, cur) => acc.concat(cur), []);
                    
                }
            }
        }
            thread = [];
            thread.push(comments[i])
    }


    //TO TEDIOUSLY HANDLE THE LAST VALUES OF THE LOOP WITH RECOPYING THE ABOVE CODE
    if(i == comments.length - 1){
   
        if(thread.length > 0){
            theShift = thread.shift()
            if(thread.length > 0){
                orderedComments[orderedComments.length] = (thread)
            }

            if(orderedComments.length == 1 && theShift['depth'] < orderedComments[0][0]['depth']){
                location = -1
            } 
            else {
            location = orderedComments.findLastIndex(obj => theShift['depth'] >= obj[0]['depth']) 
            }
                
            if(location == -1){
                orderedComments.unshift([theShift])
                removedArrays = orderedComments.splice(0)
                orderedComments[0] = removedArrays.reduce((acc, cur) => acc.concat(cur), []);
            }
            else{
                if(location == (orderedComments.length - 1)){
                    orderedComments[(orderedComments.length)] = ([theShift])
                } 
                else { 
                orderedComments[location + 1].unshift(theShift)
                removedArrays = orderedComments.splice(location + 1)
                orderedComments[location + 1] = removedArrays.reduce((acc, cur) => acc.concat(cur), []);   
                }
            }
        }
    }

}

console.log(orderedComments)



//  [{depth: 44, item: '&lt;whispers&gt;Ive never heard of them until this thread. #protobufs2024'},
// {depth: 39, item: 'Now I feel left out of working almost exclusively with XML. Protobufs must be the shit. \n\nProtobufs.'},
// {depth: 34, item: 'You dumb bastard. Its not a sailboat. Its protobufs!'},
// {depth: 29, item: "I've heard of another one. Protobufs, I think its called."},
// {depth: 24, item: ' Dont forget protobufs'},
// {depth: 19, item: 'Youre leaving out protobufs'},
// {depth: 14, item: 'Also protobufs'},
// {depth: 9, item: "Don't forget protobufs and thrift"},
// {depth: 19, item: 'JSON is life. JSON is hope.'},
// {depth: 14, item: 'Json is so widely accepted by any languages and it…re you have need like Google.... In json I trust.'},
// {depth: 9, item: '&gt;the newer hotness is protobuf\n\nProtobuf predat…rdization)\n\nFlatbuffers is newer, at 9 years old.'},
// {depth: 14, item: 'https://github.com/PyO3/pyo3 on the rust side'},
// {depth: 24, item: 'Yep, and if you wanna keep with Java, theres also…imagine there are more, but thats all Ive used.'},
// {depth: 19, item: 'I am guessing that that is for Java.'},
// {depth: 14, item: 'Jython is another one.'},
// {depth: 14, item: "There's also IronPython - a complete implementatio…ke that for JavaScript and Lua and probably more."},
// {depth: 9, item: 'There is a package called Python.NET that allows t… wonder if there are any more packages like that.'},
// {depth: 14, item: 'Legit never heard of it. And Ive been a professio… but long enough to hear of varying types of tech'},
// {depth: 9, item: 'Its important to know also protobufs'},
// {depth: 4, item: 'to expand on this - there are common "protocols" t… is another format\n\nthe newer hotness is protobuf'},
// {depth: 4, item: 'Great answer!'},
// {depth: 9, item: "I'm so glad someone said this. All of the lego blo…igned to fit together, regardless of size format."},
// {depth: 24, item: 'Ive never hurt my foot stepping on a regular expression. Check and mate.'},
// {depth: 19, item: 'That is absolutely useless. Lego is better.'},
// {depth: 14, item: 'I also know regular expressions.'},
// {depth: 9, item: 'Thank god you saved the day, I was also going to tell everyone'},
// {depth: 9, item: 'I dirty deleted my comment when I saw yours.\nThank…combine-duplo-and-lego-pieces-blt5b27e84ae5653a30'},
// {depth: 4, item: '&gt; Imagine fitting legos and duplo together. The…plo-blocks-compatible-with-lego-blocks-in-any-way'},
// {depth: 19, item: 'Oh yes! It was just fine. I just really enjoy shar… and how they interact is very interesting to me.'},
// {depth: 14, item: 'Oh yeah that makes sense, I just used french as an…me to my mind. But I hope it got the idea across.'},
// {depth: 14, item: 'Most popular programming languages were highly inf…r analogy (C being similar to Latin in this case)'},
// {depth: 19, item: 'He defeated king Harold and started the Norman con…"\n\nThanks for bringing the error to my attention!'},
// {depth: 14, item: 'William the Bastard Duke of Normandy, also known a…nqueror, did what now? At the Battle of Hastings?'},
// {depth: 9, item: 'Should have gone with an non Latin language like J…e battle of hastings for this.\n\nEdit-fixed a typo'},
// {depth: 14, item: 'JSON is just one way to represent data, one of the…erves to make it easier to transfer and maintain.'},
// {depth: 9, item: 'so in this case is JSON just a way to translate? A…t the structure of the code it looks intimidating'},
// {depth: 4, item: 'If may I add another example to your explanation:\n…ifferent word ( Milk in english, Lait in French).'},
// {depth: 9, item: 'php writes text like "SELECT \\* FROM USER" to a so…could be anything, as long as the data is correct'},
// {depth: 4, item: 'Can I just ask - if, say, PHP connects to my datab…? Through what protocol do these two communicate?'},
// {depth: 4, item: 'Great answer!'},
// {depth: 4, item: 'You can put javascript in a php or asp file and mix match that way.'},
// {depth: 9, item: 'Nah hack it up in a hex editor #DEADBEEF :-)'},
// {depth: 4, item: 'OGs use CSV files :p'},
// {depth: 4, item: '*React has entered the chat*'}]