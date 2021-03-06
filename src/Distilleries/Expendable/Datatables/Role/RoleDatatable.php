<?php namespace Distilleries\Expendable\Datatables\Role;

use Distilleries\Expendable\Datatables\BaseDatatable;

class RoleDatatable extends BaseDatatable
{
    public function build()
    {
        $this
            ->add('id', null, trans('expendable::datatable.id'))
            ->add('libelle', null, trans('expendable::datatable.libelle'))
            ->add('initials', null, trans('expendable::datatable.initials'));

        $this->addDefaultAction();

    }
}