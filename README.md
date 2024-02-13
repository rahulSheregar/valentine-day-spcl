Hi all... !!

I scracted some code just for fun and happy valentines day....!

To generate url for your girlfriend/boyfriend, follow the following steps:

1.  Click the lik below:
    https://github.com/rahulSheregar/valentine-day-spcl/blob/main/src/app/%5Bid%5D/proposal.json

2.  Take a look at the JSON file provided. Here's an example structure:

    {
        "1": {
            "url_name": "message"
        },
        "2": {
            "test": "test_message!"
        },
        "3": {
            "null": "no message for you!",
            "null2": "new message"
        }
    }

    Identify the last sequence number used in the JSON file (e.g., 3 in the provided example).

    Append your instance following this format:

    "sequence number": {
        "girlfriend/boyfriendname/urlname": "message you want to say when he/she says yes"
    }

    For instance, if the last sequence number is 3, your new entry should look like this:

    "4": {
        "girlfriend": "<your message goes here!>"
    }

3.  Then click commit changes.
4.  There might be git merge conflicts, please resolve it.
5.  The personal url will be https://valentine-day-spcl.vercel.app/<your sequence number>/<your girlfriend/boyfriend name>
    example based on above example: https://valentine-day-spcl.vercel.app/4/girlfriend
Remember, the objective here is to have some fun and spread love! Please refrain from editing someone else's message or deleting the JSON file.

While there might be more efficient solutions available, the aim here was to leverage CI/CD in a short timeframe.

Enjoy spreading love and joy! 💕
