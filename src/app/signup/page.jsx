import Link from "next/link";
import EmailProvider from "@/components/signup/EmailProvider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const SignupPage = () => {
  return (
    <div className="flex flex-col items-center ">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Sign in</CardTitle>
          <CardDescription>to login into your account</CardDescription>
        </CardHeader>

        <CardContent className="">
          <EmailProvider />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Have account?
            <span className="text-black dark:text-white underline">
              <Link href="/signin">Sign in</Link>
            </span>{" "}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupPage;
