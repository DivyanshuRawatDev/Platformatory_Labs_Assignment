import * as admin from "firebase-admin";

const firbaseConfig: admin.ServiceAccount = {
  projectId: "job-seeker-9c530",
  privateKey:
    "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCciMF3PbH+JS+R\nr8T51npTMINocqvQ3dEYpDupxyGG/0u2KBhN/tgTIID9N5sUINO7GH5DskBKySTE\nW/yHftxMkY6NKig3eDMt6JgOdRD7pAxa7tkKnTyBycBB+8dBhh1KON0Zy819+UG4\n95e22KcXdyq7KCQjzrydKOLwHXi7exFLNqo7mUY+gsQGJnRd1Yt/S232w2WwPB5Z\n+cJnF9fbfxVwnJ9/EfKqASjhp28KsSqJc5QX4CVIUajhyfMq42d17LGTwmOe7gfm\nXpgMFa/uC+Ixh5sl4dgZ4ZEm3CrbrZkGledClSLR+RNLi8LXMMI0ZvpLHqG64UiU\nGDpEMXKZAgMBAAECggEAC3Kj8CgdVuhvdsCLpQ2RY3lHjvwIl+1KVWVDbhqfrNYJ\nuorAS59LkaCIVnHP4Am45QoOR+imyOFg1JHOoYvT/tnhT+5z7lSWgkZsV8L/fjZ5\n5yzoch0xjONinGDBFTLCpx2Kq/rf7n/WwDkunwMauz2uQhhA27PgTupr0w2GDsiS\nD/VCqjITVGkZ6YAw+c3SZRq4E9wO8c/u4MUovkla59DpizfbXZMDbhT8IQvakDFK\nmLVWlD+GKFiX0oioLxeWDRtksBmhwIpHDsCoi+gkWumxXgIHUuEosoLdibpLtWYZ\nMctMFkg++cYgQwlrPj6KKw4TtVIVeNyEP8rK4iT2FQKBgQDWYDEhfUwc8Ii/cNw1\nZen6p/wC/N/YeTqEnl2aptJzK5Kae/v3k/dOCmIPVAc9dXMU6E4s9rT9G4EWtnG6\nX+v/NVbqOuUII59Sb5JiX00ic9v2FV+opZLPldJRRCEeask4E9/CUFUBRKakIaa8\nU6Ws3eocVo2gZp/gSHBSoxEWbQKBgQC67XqpEsumHJrwvVNoS90dtxDBdaV/RbXE\ncVxTuJeetdpzyFBq4YA0vyXqBzFW/cO3FMF4nhAc+ErxTGmMAk8rSjBZ3/Qh1hj+\nRakLRorf07ZZpchQGh1I3lBY8cC31/Kjo49A1ifeQGziew7fTPRONlfCGhc1uHCC\n0gecKVFhXQKBgQCBGV6dB2LNzsDbYTEL6zrz2zP17Kk1KRRnhyNhnfMAro3UALRl\njTMSSUhyaK0Pgupx/dAOXefywRyFPAvTLC7n+wxDdII225T3xP8HxNKj29fsI0T/\nP+7gmh4VGI1FTxOsdLN8xnnakKg2EZnishEEwINa23jgzsya+aTC7za8JQKBgQCQ\n/EF3giyS2v0SXMakzrLiqWtFooqK/PbPN131UefIIiUeSPCW9fEK+Hff3VRXtNxo\n1KB7fZ3h2nPGVQ5ImkHtwc1e6GXjGLyp/D3xkPWGRh/ZyMxl1NuB+W04j8p6zfRV\nGDe0gmbJ7A6IXApdCMM1JtFKrBH0iOo7jcx5Q1LrwQKBgQDMcizi2aJ4Ezj1ImFe\nL/KSJy3Mhpzj0wJmy9eNKAsBb9MupYwBwC19XbNAIY9vjtvSRAUsiypopJb5SDGD\ngroBLuL7pJ0XmmGnXGjwDhkc9hWDDWfp2ypHq1XbWDN9bpXcEn+oKRK68sOXcwib\nK9/6/8fuN24dhSXaZHoruu0cdQ==\n-----END PRIVATE KEY-----\n",
  clientEmail:
    "firebase-adminsdk-fbsvc@job-seeker-9c530.iam.gserviceaccount.com",
};

admin.initializeApp({
  credential: admin.credential.cert(firbaseConfig),
});

export { admin };
