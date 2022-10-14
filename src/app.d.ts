// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
    // interface Locals {}
    // interface PageData {}
    // interface Error {}
    // interface Platform {}

}

declare namespace Wordpress {
    interface Image {
        sourceUrl: string;
    }
    interface User {
        name: string;
        avatarUrl: string;
    }
    interface Category {
        name: string;
    }
    interface Post {
        id: string;
        title: string;
        excerpt: string;
        content: string;
        date: Date;
        slug: string;
        categories: string[];
        featuredImage: Image;
        author: User;
    }
}

declare namespace GraphQlQueries {
    interface HomePage {
        posts: {
            edges: [{
                node: {
                    id: string;
                    slug: string;
                    title: string;
                    excerpt: string;
                    content: string;
                    date: Date;
                    featuredImage: {
                        node: {
                            sourceUrl: string;
                            title: string;
                            altText: string;
                        }
                    };
                    author: {
                        node: {
                            name: string;
                            avatar: {
                                url: string;
                            }
                        }
                    };
                    categories: {
                        nodes: [{
                            name: string;
                        }]
                    };
                }
            }]
        }
        allSettings: {
            generalSettingsUrl: string;
            generalSettingsTitle: string;
        }
    }
}
