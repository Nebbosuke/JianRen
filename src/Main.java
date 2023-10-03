package src;
import java.util.Scanner;
public class Main{
    public static void main(String args[]){
        System.out.println("®”‚ğ“ü—Í‚µ‚Ä‚­‚¾‚³‚¢");
        Scanner scanner = new Scanner(System.in);
        String scan = scanner.next();
        int num=Integer.parseInt(scan);
        if(num%2==0){
            System.out.println("even");
        }else{
            System.out.println("odd");
        }
        scanner.close();
     }
}