function isPalindrome(n) {
    let rem;
    let revNum=0;
    let temp=n;
    while(temp>0) {
        rem=temp%10;
        revNum=revNum*10+rem;
        temp=parseInt(temp/10);
    }
    if(revNum===n) {
        console.log(n," is Palindrome");
    }
    else {
        console.log(n," is not Palindrome");
    }
}

isPalindrome(121);
isPalindrome(12345);