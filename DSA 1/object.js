let batMan = {
    fname:'Bruce',
    lname:'Wayne',
    'gf-Name':'catWomen',
    fullName: function(){
        console.log(this.fname,this.lname)
    }

}
// console.log(batMan.fname, batMan.lname)
console.log(batMan["gf-Name"])
batMan.Nemisis = 'Joker'
delete batMan["gf-Name"]
console.log(batMan);
batMan.fullName()