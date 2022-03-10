class array {

   public int arr[]={6,8,8,9,3,8,9};
   public l=arr.length,count=0;
    void print()
    {
        for(int i=0;i<l;i++)
        {
            if(arr[i]==arr[i+1])
            {
                count++;
            }
    
        }
        system.out.println(count);
    }
    }


    public static void main()
{
    array a=new array();
    a.print();

}

