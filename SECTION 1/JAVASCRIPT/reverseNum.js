function reverseNum(num) {
    let temp=num;
    let rem;
    let numRev=0;

    while(temp>0) {
        rem=temp%10;
        numRev=(numRev*10) + rem;
        temp=parseInt(temp/10);
    }
    console.log(numRev);
}

reverseNum(1234);