<?php

namespace App\Listeners;

use App\Events\ContactCreated;
use App\Notifications\newContact;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendContactCreatedNotifications implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\ContactCreated  $event
     * @return void
     */
    public function handle(ContactCreated $event)
    {
        $event->contact->notify(new newContact());
    }
}
