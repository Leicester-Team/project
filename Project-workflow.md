# daily branches procedure:
1. git pull origin development  
2. create new branch <naming> yourname-taskname.
3. do your work.
4. do not push before the meeting and code review.
5. after your code review during the meeting push your work to your branch .
6. pull request to development branch from your branch and ebrahim will merge it.
7. bayan after finishing merge to development branch and make sure there is no errors will merge to the main.


# Project Structure:

## home page <index> :
html:
    1. header
        nav
        h2
        img background
    2. main
        section1:
            h1
            p
        section2:
        3-articles tags
            article:
            h2
            ul
        section3:
            4-img
    3.footer
        &&copy
        3iconeimg

js:

1. add listner "click " >>>> storage setitem fun.(item,event.target.id);
2. html element to move to information page.

## information page:
html:
    1. header
        nav
        h2
        img background
    2. main
        section
        img:
        div:
    3.footer
        &&copy
        3iconeimg

js: 
 1. vaccine constructer fun(name,company-name,country of manufacturing,tempreture,dose number, effectiveness rate,img path,price)
2. loop for collecting data for vaccine.
3. fun getitem localstorage selected id. 
4. fill data inside html .

## registration page:
html:
    1. header
        nav
        h2
        img background
    2. main
        form:
        [name,email, phone num, vaccine name(list), alergy(checkbox),date]
        submit button

    3.footer
        &&copy
        3iconeimg

JS:
1. constructer fun  
    properties: form inputs
    array && vaccine limit

2. method random num (6 num){optional unique num}
3. getitem if (data)
4. add listner 
    - after submit innerhtml= " "
    vaccine limit[i]--;
    - innerhtml : your id num and message for the user.
5. push to constrocter fun array 
6. setitem 
7. 

## track page:
html:
1.form :
[list(input, input(id)]
2. submit button

js:
1.  grtitem local storage from registration page 
2. add listener submit
let index;
    addlistener fun (if admin && second input id ==="saved id"){
        admin();
    }  else{ for (objectarray ){
        if (id= object.id){
            applicant (id)
            index=i;
        }
    } 

3.  admin fun:
    main.innerhtml="";
add all orders in local storage into a table .
chart js vaccine limit

4. member fun:
main.innerhtml="";
add member information (list or p);
map 

## aboutus page:

html:
    1. header
        nav
        h2
        img background
    2. main:
            h1
           section:
            4-img
            4-p inside flip
    3.footer
        &&copy
        3iconeimg

## stretch goals:
1. cancel oreder (member page and admin page )
2. unique user number (registration page)



